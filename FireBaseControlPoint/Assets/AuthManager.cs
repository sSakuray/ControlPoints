using System;
using System.Text.RegularExpressions;
using UnityEngine;
using UnityEngine.UI;
using Firebase;
using Firebase.Auth;
using Firebase.Extensions;
using System.Collections;

public class AuthManager : MonoBehaviour
{
    [Header("Panels")]
    public GameObject loginPanel;
    public GameObject registerPanel;

    [Header("Login UI")]
    public InputField loginEmailInput;
    public InputField loginPasswordInput;
    public Text loginMessageText;
    public Button loginButton;

    [Header("Register UI")]
    public InputField registerEmailInput;
    public InputField registerPasswordInput;
    public Text registerMessageText;
    public Button registerButton;

    [Header("Switch Buttons")]
    public Button toRegisterButton;
    public Button toLoginButton;

    private FirebaseAuth auth;

    private void Start()
    {
        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWithOnMainThread(task => {
            if (task.IsFaulted || task.IsCanceled)
            {
                Debug.LogError("Firebase: Ошибка инициализации - " + task.Exception);
                return;
            }

            DependencyStatus dependencyStatus = task.Result;
            if (dependencyStatus == DependencyStatus.Available)
            {
                auth = FirebaseAuth.DefaultInstance;
            }
            else
            {
                Debug.LogError($"Firebase: Не удалось разрешить зависимости {dependencyStatus}");
            }
        });

        loginButton.onClick.AddListener(() => StartCoroutine(Login()));
        registerButton.onClick.AddListener(() => StartCoroutine(Register()));
        toRegisterButton.onClick.AddListener(() => SwitchPanels(false));
        toLoginButton.onClick.AddListener(() => SwitchPanels(true));
    }

    private void SwitchPanels(bool isLogin)
    {
        loginPanel.SetActive(isLogin);
        registerPanel.SetActive(!isLogin);
        ClearMessages();
    }

    private void ClearMessages()
    {
        loginMessageText.text = "";
        registerMessageText.text = "";
    }

    private bool IsValidEmail(string email)
    {
        if (string.IsNullOrEmpty(email)) return false;
        try 
        {
            return Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");
        }
        catch 
        {
            return false;
        }
    }

    IEnumerator Register()
    {
        if (auth == null)
        {
             registerMessageText.text = "Ошибка: Firebase не готов.";
            yield break;
        }

        string email = registerEmailInput.text;
        string password = registerPasswordInput.text;

        if (!IsValidEmail(email))
        {
            registerMessageText.text = "Ошибка: Неверный формат почты";
            yield break;
        }

        if (password.Length < 6)
        {
            registerMessageText.text = "Ошибка: Пароль минимум 6 символов";
            yield break;
        }

        registerMessageText.text = "Регистрация...";
        SetButtonsInteractable(false);
        
        var registerTask = auth.CreateUserWithEmailAndPasswordAsync(email, password);
        yield return new WaitUntil(() => registerTask.IsCompleted);

        if (registerTask.Exception != null)
        {
            FirebaseException firebaseEx = registerTask.Exception.GetBaseException() as FirebaseException;
            AuthError errorCode = (AuthError)firebaseEx.ErrorCode;

            string errorMessage = "Ошибка: ";
            if (errorCode == AuthError.EmailAlreadyInUse)
            {
                errorMessage += "Почта уже занята!";
            } 
            else if (errorCode == AuthError.InvalidEmail)
            {
                errorMessage += "Некорректная почта.";
            }
            else
            {
                errorMessage += "Ошибка регистрации.";
            }
            
            if (registerMessageText != null)
            {
                registerMessageText.text = errorMessage;
            }
            Debug.LogError($"Регистрация failed: {registerTask.Exception}");
        }
        else
        {
            FirebaseUser newUser = registerTask.Result.User;
            Debug.Log($"Успешно создан: {newUser.Email}");
            
            if (loginEmailInput != null)
            {
                loginEmailInput.text = email;
            }
            if (loginPasswordInput != null)
            {
                loginPasswordInput.text = password;
            }
            
            SwitchPanels(true);
            if (loginMessageText != null)
            {
                loginMessageText.text = "Регистрация успешна!";
            }
        }
        
        SetButtonsInteractable(true);
    }

    IEnumerator Login()
    {
        if (auth == null)
        {
            if (loginMessageText != null)
            {
                loginMessageText.text = "Ошибка: Firebase не готов.";
            }
            yield break;
        }

        string email = loginEmailInput.text;
        string password = loginPasswordInput.text;

        if (!IsValidEmail(email))
        {
            if (loginMessageText != null)
            {
                loginMessageText.text = "Неверный формат почты";
            }
            yield break;
        }

        if (loginMessageText != null)
        {
            loginMessageText.text = "Вход...";
        }
        SetButtonsInteractable(false);
        
        var loginTask = auth.SignInWithEmailAndPasswordAsync(email, password);
        yield return new WaitUntil(() => loginTask.IsCompleted);

        if (loginTask.Exception != null)
        {
            FirebaseException firebaseEx = loginTask.Exception.GetBaseException() as FirebaseException;
            if (firebaseEx != null)
            {
                AuthError errorCode = (AuthError)firebaseEx.ErrorCode;
                string errorMessage = "";
                
                switch (errorCode)
                {
                    case AuthError.UserNotFound: errorMessage = "Пользователь не найден"; break;
                    case AuthError.WrongPassword: errorMessage = "Неверный пароль"; break;
                    case AuthError.InvalidEmail: errorMessage = "Неверная почта"; break;
                    case AuthError.NetworkRequestFailed: errorMessage = "Нет интернета"; break;
                    default: errorMessage = "Ошибка входа"; break;
                }
                
                if (loginMessageText != null) loginMessageText.text = errorMessage;
            }
        }
        else
        {
            FirebaseUser user = loginTask.Result.User;
            if (loginMessageText != null)
            {
                loginMessageText.text = $"Привет, {user.Email}!";
            }
            Debug.Log($"Успешный вход: {user.Email}");
        }
        
        SetButtonsInteractable(true);
    }

    private void SetButtonsInteractable(bool state)
    {
        if (loginButton != null)
        {
            loginButton.interactable = state;
        }
        if (registerButton != null)
        {
            registerButton.interactable = state;
        }
        if (toRegisterButton != null)
        {
            toRegisterButton.interactable = state;
        }
        if (toLoginButton != null)
        {
            toLoginButton.interactable = state;
        }
    }
}