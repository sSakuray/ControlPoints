using UnityEngine;
using Zenject;

public class GameInstaller : MonoInstaller
{
    [SerializeField] private MainScreenView mainScreenView;
    [SerializeField] private PanelView panelView;
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip openClip;
    [SerializeField] private AudioClip closeClip;
    [SerializeField] private AudioClip shootClip;
    [SerializeField] private AudioClip hitClip;
    [SerializeField] private bool useJsonSaver = true;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private GameObject debrisPrefab;
    [SerializeField] private GameObject playerObject;
    [SerializeField] private Target target;

    public override void InstallBindings()
    {
        InstallUI();
        InstallAudio();
        InstallGameplay();
    }

    private void InstallUI()
    {
        Container.Bind<MainScreenView>().FromInstance(mainScreenView).AsSingle();
        Container.Bind<PanelView>().FromInstance(panelView).AsSingle();
        Container.Bind<UISwitcher>().AsSingle().NonLazy();
        Container.Bind<MainScreenController>().AsSingle();
        Container.Bind<PanelController>().AsSingle();
        Container.Bind<IInitializable>().To<UIInitializer>().AsSingle();
    }

    private void InstallAudio()
    {
        Container.Bind<AudioSource>().FromInstance(audioSource).AsSingle();
        Container.Bind<AudioClip>().WithId("Open").FromInstance(openClip);
        Container.Bind<AudioClip>().WithId("Close").FromInstance(closeClip);
        if (shootClip != null)
        {
            Container.Bind<AudioClip>().WithId("Shoot").FromInstance(shootClip);
        }
        if (hitClip != null) 
        {
            Container.Bind<AudioClip>().WithId("Hit").FromInstance(hitClip);
        }
        Container.Bind<ISoundPlayer>().To<SoundPlayer>().AsSingle();
    }

    private void InstallSaveSystem()
    {
        if (useJsonSaver) 
        {
            Container.Bind<ISaver>().To<JsonSaver>().AsSingle();
        }
        else 
        {
            Container.Bind<ISaver>().To<PlayerPrefsSaver>().AsSingle();
        }
        Container.BindInterfacesAndSelfTo<Score>().AsSingle().NonLazy();
    }

    private void InstallGameplay()
    {
        Container.Bind<IFadeService>().To<FadeService>().AsSingle();
        InstallSaveSystem();

        if (debrisPrefab != null)
        {
            Container.Bind<GameObject>().WithId("DebrisPrefab").FromInstance(debrisPrefab);
        }
        if (target != null)
        {
            Container.Bind<Target>().FromInstance(target).AsSingle();
        }
        if (bulletPrefab != null)
        {
            Container.BindFactory<Transform, Bullet, BulletFactory>()
                .FromMonoPoolableMemoryPool<Transform, Bullet>(poolBinder => poolBinder
                    .WithInitialSize(10)
                    .FromComponentInNewPrefab(bulletPrefab)
                    .UnderTransformGroup("Bullets"));
        }

        if (playerObject != null)
        {
            Rigidbody2D playerRb = playerObject.GetComponent<Rigidbody2D>();
            if (playerRb != null)
            {
                Container.Bind<Rigidbody2D>().FromInstance(playerRb).AsSingle();
            }
            Collider2D playerCol = playerObject.GetComponent<Collider2D>();
            if (playerCol != null)
            {
                Container.Bind<Collider2D>().WithId("PlayerCollider").FromInstance(playerCol).AsSingle();
            }
            Container.Bind<Transform>().WithId("CameraTarget").FromInstance(playerObject.transform).AsSingle();
        }
    }
}

public class UIInitializer : IInitializable
{
    private readonly UISwitcher _uiSwitcher;
    private readonly MainScreenController _mainScreenController;
    private readonly ISaver _saver;
    private readonly Score _score;

    [Inject]
    public UIInitializer(UISwitcher uiSwitcher, MainScreenController mainScreenController, ISaver saver, Score score)
    {
        _uiSwitcher = uiSwitcher;
        _mainScreenController = mainScreenController;
        _saver = saver;
        _score = score;
    }

    public void Initialize()
    {
        _score.SetScore(_saver.LoadScore());
        _uiSwitcher.ChangeState(_mainScreenController);
    }
}
