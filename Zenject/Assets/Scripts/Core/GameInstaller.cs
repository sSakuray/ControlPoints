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
    [SerializeField] private string jsonFileName = "score.json";
    [SerializeField] private GameObject bulletPrefab;
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
        
        Container.BindInstance(new SoundConfig 
        {
            Open = openClip,
            Close = closeClip,
            Shoot = shootClip,
            Hit = hitClip
        }).AsSingle();

        Container.Bind<ISoundPlayer>().To<SoundPlayer>().AsSingle();
    }

    private void InstallSaveSystem()
    {
        if (useJsonSaver) 
        {
            string fullPath = System.IO.Path.Combine(Application.persistentDataPath, jsonFileName);
            Container.Bind<ISaver>().To<JsonSaver>().AsSingle().WithArguments(fullPath);
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

        Container.Bind<Target>().FromInstance(target).AsSingle();
        
        Container.BindFactory<Bullet, BulletFactory>()
            .FromMonoPoolableMemoryPool<Bullet>(poolBinder => poolBinder
                .WithInitialSize(10)
                .FromComponentInNewPrefab(bulletPrefab)
                .UnderTransformGroup("Bullets"));

        SimplePlayerMovement player = playerObject.GetComponent<SimplePlayerMovement>();
        Container.Bind<SimplePlayerMovement>().FromInstance(player).AsSingle();
    }
}
