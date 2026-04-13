using deVoid.Utils;

public class MainMenuButtonSignal : ASignal { }

public class AddMenuButtonSignal : ASignal { }

public class RemoveMenuButtonSignal : ASignal { }

public class AddResourceSignal : ASignal<ResourceType, int> { }

public class RemoveResourceSignal : ASignal<ResourceType, int> { }

public class ResetResourcesSignal : ASignal { }
