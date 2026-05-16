using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.Collections;
using System.Text.RegularExpressions;

public class AuthManager : MonoBehaviour
{
    [Header("Panels")]
    public GameObject loginSubPanel;
    public GameObject registerSubPanel;
    public GameObject gamePanel;

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
    public Button logoutButton;

    [Header("Server")]
    public string serverUrl = "http://localhost:3000";
    private string currentUserUID = "";

    void Start()
    {
        loginButton.onClick.AddListener(() => { StartCoroutine(Login()); });
        registerButton.onClick.AddListener(() => { StartCoroutine(Register()); });
        toRegisterButton.onClick.AddListener(() => { SwitchPanel(false); });
        toLoginButton.onClick.AddListener(() => { SwitchPanel(true); });
        logoutButton.onClick.AddListener(Logout);
        
        SwitchPanel(true);
    }

    void SwitchPanel(bool isLogin)
    {
        if (loginSubPanel) 
        {
            loginSubPanel.SetActive(isLogin);
        }
        if (registerSubPanel) 
        {
            registerSubPanel.SetActive(!isLogin);
        }
        if (gamePanel) 
        {
            gamePanel.SetActive(false);
        }
        
        loginMessageText.text = "";
        registerMessageText.text = "";
    }

    IEnumerator Register()
    {
        string email = registerEmailInput.text;
        string pass = registerPasswordInput.text;

        if (!Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
        {
            registerMessageText.text = "Неверная почта";
            yield break;
        }

        registerMessageText.text = "Запрос...";
        string json = "{\"email\":\"" + email + "\",\"password\":\"" + pass + "\"}";
        
        using (UnityWebRequest req = PostRequest("/register", json))
        {
            yield return req.SendWebRequest();
            HandleAuthResponse(req, registerMessageText, true);
        }
    }

    IEnumerator Login()
    {
        string email = loginEmailInput.text;
        string pass = loginPasswordInput.text;

        loginMessageText.text = "Вход...";
        string json = "{\"email\":\"" + email + "\",\"password\":\"" + pass + "\"}";

        using (UnityWebRequest req = PostRequest("/login", json))
        {
            yield return req.SendWebRequest();
            HandleAuthResponse(req, loginMessageText, false);
        }
    }

    void HandleAuthResponse(UnityWebRequest req, Text msgText, bool isReg)
    {
        if (req.result == UnityWebRequest.Result.Success)
        {
            AuthResponse resp = JsonUtility.FromJson<AuthResponse>(req.downloadHandler.text);
            if (isReg) 
            {
                loginEmailInput.text = registerEmailInput.text;
                SwitchPanel(true);
                loginMessageText.text = "Аккаунт создан!";
            }
            else 
            {
                currentUserUID = resp.uid;
                PlayerPrefs.SetString("userUID", currentUserUID);
                OpenGame();
            }
        }
        else
        {
            try { msgText.text = JsonUtility.FromJson<AuthResponse>(req.downloadHandler.text).error; }
            catch { msgText.text = "Ошибка сервера"; }
        }
    }

    void OpenGame()
    {
        if (loginSubPanel) { loginSubPanel.SetActive(false); }
        if (registerSubPanel) { registerSubPanel.SetActive(false); }
        if (gamePanel) { gamePanel.SetActive(true); }
        GetComponent<ClickerGame>().InitWithUser(currentUserUID);
    }

    public void Logout()
    {
        currentUserUID = "";
        PlayerPrefs.DeleteKey("userUID");
        SwitchPanel(true);
    }

    UnityWebRequest PostRequest(string path, string json)
    {
        UnityWebRequest req = new UnityWebRequest(serverUrl + path, "POST");
        req.uploadHandler = new UploadHandlerRaw(System.Text.Encoding.UTF8.GetBytes(json));
        req.downloadHandler = new DownloadHandlerBuffer();
        req.SetRequestHeader("Content-Type", "application/json");
        return req;
    }

    [System.Serializable] class AuthResponse { public string uid; public string error; }
}
