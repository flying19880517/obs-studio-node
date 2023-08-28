export declare const DefaultD3D11Path: string;
export declare const DefaultOpenGLPath: string;
export declare const DefaultDrawPluginPath: string;
export declare const DefaultBinPath: string;
export declare const DefaultDataPath: string;
export declare const DefaultPluginPath: string;
export declare const DefaultPluginDataPath: string;
export declare const enum ESourceFlags {
    Unbuffered = 1,
    ForceMono = 2
}
export declare const enum EMonitoringType {
    None = 0,
    MonitoringOnly = 1,
    MonitoringAndOutput = 2
}
export declare const enum EOrderMovement {
    Up = 0,
    Down = 1,
    Top = 2,
    Bottom = 3
}
export declare const enum EDeinterlaceFieldOrder {
    Top = 0,
    Bottom = 1
}
export declare const enum EVideoCodes {
    Success = 0,
    Fail = -1,
    NotSupported = -2,
    InvalidParam = -3,
    CurrentlyActive = -4,
    ModuleNotFound = -5
}
export declare const enum EHotkeyObjectType {
    Frontend = 0,
    Source = 1,
    Output = 2,
    Encoder = 3,
    Service = 4
}
export declare const enum EDeinterlaceMode {
    Disable = 0,
    Discard = 1,
    Retro = 2,
    Blend = 3,
    Blend2X = 4,
    Linear = 5,
    Linear2X = 6,
    Yadif = 7,
    Yadif2X = 8
}
export declare const enum EFontStyle {
    Bold = 1,
    Italic = 2,
    Underline = 4,
    Strikeout = 8
}
export declare const enum EPropertyType {
    Invalid = 0,
    Boolean = 1,
    Int = 2,
    Float = 3,
    Text = 4,
    Path = 5,
    List = 6,
    Color = 7,
    Button = 8,
    Font = 9,
    EditableList = 10,
    FrameRate = 11,
    Group = 12,
    ColorAlpha = 13,
    Capture = 14
}
export declare const enum EListFormat {
    Invalid = 0,
    Int = 1,
    Float = 2,
    String = 3
}
export declare const enum EEditableListType {
    Strings = 0,
    Files = 1,
    FilesAndUrls = 2
}
export declare const enum EPathType {
    File = 0,
    FileSave = 1,
    Directory = 2
}
export declare const enum ETextType {
    Default = 0,
    Password = 1,
    Multiline = 2
}
export declare const enum ENumberType {
    Scroller = 0,
    Slider = 1
}
export declare const enum EAlignment {
    Center = 0,
    Left = 1,
    Right = 2,
    Top = 4,
    Bottom = 8,
    TopLeft = 5,
    TopRight = 6,
    BottomLeft = 9,
    BottomRight = 10
}
export declare const enum EOutputFlags {
    Video = 1,
    Audio = 2,
    AV = 3,
    Encoded = 4,
    Service = 8,
    MultiTrack = 16
}
export declare const enum ESourceOutputFlags {
    Video = 1,
    Audio = 2,
    Async = 4,
    AsyncVideo = 5,
    CustomDraw = 8,
    Interaction = 32,
    Composite = 64,
    DoNotDuplicate = 128,
    Deprecated = 256,
    DoNotSelfMonitor = 512
}
export declare const enum ESceneDupType {
    Refs = 0,
    Copy = 1,
    PrivateRefs = 2,
    PrivateCopy = 3
}
export declare const enum ESourceType {
    Input = 0,
    Filter = 1,
    Transition = 2,
    Scene = 3
}
export declare const enum EFaderType {
    Cubic = 0,
    IEC = 1,
    Log = 2
}
export declare const enum EColorFormat {
    Unknown = 0,
    A8 = 1,
    R8 = 2,
    RGBA = 3,
    BGRX = 4,
    BGRA = 5,
    R10G10B10A2 = 6,
    RGBA16 = 7,
    R16 = 8,
    RGBA16F = 9,
    RGBA32F = 10,
    RG16F = 11,
    RG32F = 12,
    R16F = 13,
    R32F = 14,
    DXT1 = 15,
    DXT3 = 16,
    DXT5 = 17
}
export declare const enum EScaleType {
    Default = 0,
    Point = 1,
    Bicubic = 2,
    Bilinear = 3,
    Lanczos = 4,
    Area = 5
}
export declare const enum ERangeType {
    Default = 0,
    Partial = 1,
    Full = 2
}
export declare const enum EVideoFormat {
    None = 0,
    I420 = 1,
    NV12 = 2,
    YVYU = 3,
    YUY2 = 4,
    UYVY = 5,
    RGBA = 6,
    BGRA = 7,
    BGRX = 8,
    Y800 = 9,
    I444 = 10,
    BGR3 = 11,
    I422 = 12,
    I40A = 13,
    I42A = 14,
    YUVA = 15,
    AYUV = 16
}
export declare const enum EBoundsType {
    None = 0,
    Stretch = 1,
    ScaleInner = 2,
    ScaleOuter = 3,
    ScaleToWidth = 4,
    ScaleToHeight = 5,
    MaxOnly = 6
}
export declare const enum EColorSpace {
    Default = 0,
    CS601 = 1,
    CS709 = 2,
    CSSRGB = 3
}
export declare const enum ESpeakerLayout {
    Unknown = 0,
    Mono = 1,
    Stereo = 2,
    TwoOne = 3,
    Quad = 4,
    FourOne = 5,
    FiveOne = 6,
    FiveOneSurround = 7,
    SevenOne = 8,
    SevenOneSurround = 9,
    Surround = 10
}
export declare const enum EOutputCode {
    Success = 0,
    BadPath = -1,
    ConnectFailed = -2,
    InvalidStream = -3,
    Error = -4,
    Disconnected = -5,
    Unsupported = -6,
    NoSpace = -7,
    EncoderError = -8,
    OutdatedDriver = -65
}
export declare const enum ECategoryTypes {
    NODEOBS_CATEGORY_LIST = 0,
    NODEOBS_CATEGORY_TAB = 1
}
export declare const enum ERenderingMode {
    OBS_MAIN_RENDERING = 0,
    OBS_STREAMING_RENDERING = 1,
    OBS_RECORDING_RENDERING = 2
}
export declare const enum EIPCError {
    STILL_RUNNING = 259,
    VERSION_MISMATCH = 252,
    OTHER_ERROR = 253,
    MISSING_DEPENDENCY = 254,
    NORMAL_EXIT = 0
}
export declare const Global: IGlobal;
export declare const Video: IVideo;
export declare const InputFactory: IInputFactory;
export declare const SceneFactory: ISceneFactory;
export declare const FilterFactory: IFilterFactory;
export declare const TransitionFactory: ITransitionFactory;
export declare const DisplayFactory: IDisplayFactory;
export declare const VolmeterFactory: IVolmeterFactory;
export declare const FaderFactory: IFaderFactory;
export declare const ModuleFactory: IModuleFactory;
export declare const IPC: IIPC;
export declare const ServiceFactory: IServiceFactory;
export interface ISettings {
    [key: string]: any;
}
export interface IVec2 {
    readonly x: number;
    readonly y: number;
}
export interface ITimeSpec {
    readonly sec: number;
    readonly nsec: number;
}
export interface ITransformInfo {
    readonly pos: IVec2;
    readonly rot: number;
    readonly scale: IVec2;
    readonly alignment: EAlignment;
    readonly boundsType: EBoundsType;
    readonly boundsAlignment: number;
    readonly bounds: IVec2;
}
export interface ICropInfo {
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
}
export interface IIPC {
    setServerPath(binaryPath: string, workingDirectoryPath?: string): void;
    connect(uri: string): void;
    host(uri: string): EIPCError;
    disconnect(): void;
}
export interface IGlobal {
    startup(locale: string, path?: string): void;
    shutdown(): void;
    getOutputFlagsFromId(id: string): number;
    setOutputSource(channel: number, input: ISource): void;
    getOutputSource(channel: number): ISource;
    readonly totalFrames: number;
    readonly laggedFrames: number;
    readonly initialized: boolean;
    locale: string;
    multipleRendering: boolean;
    readonly version: number;
}
export interface IBooleanProperty extends IProperty {
}
export interface IColorProperty extends IProperty {
}
export interface ICaptureProperty extends IProperty {
}
export interface IButtonProperty extends IProperty {
    buttonClicked(source: object): void;
}
export interface IFontProperty extends IProperty {
}
export interface IListProperty extends IProperty {
    readonly details: IListDetails;
}
export interface IListDetails {
    readonly format: EListFormat;
    readonly items: {
        name: string;
        value: string | number;
    }[];
}
export interface IEditableListProperty extends IProperty {
    readonly details: IEditableListDetails;
}
export interface IEditableListDetails extends IListDetails {
    readonly type: EEditableListType;
    readonly filter: string;
    readonly defaultPath: string;
}
export interface IPathProperty extends IProperty {
    readonly details: IPathDetails;
}
export interface IPathDetails {
    readonly type: EPathType;
    readonly filter: string;
    readonly defaultPath: string;
}
export interface ITextProperty extends IProperty {
    readonly details: ITextDetails;
}
export interface ITextDetails {
    readonly type: ETextType;
}
export interface INumberProperty extends IProperty {
    readonly details: INumberDetails;
}
export interface INumberDetails {
    readonly type: ENumberType;
    readonly min: number;
    readonly max: number;
    readonly step: number;
}
export interface IProperty {
    readonly status: number;
    readonly name: string;
    readonly description: string;
    readonly longDescription: string;
    readonly enabled: boolean;
    readonly visible: boolean;
    readonly type: EPropertyType;
    readonly value: any;
    next(): IProperty;
    modified(): boolean;
}
export interface IProperties {
    readonly status: number;
    first(): IProperty;
    count(): number;
    get(name: string): IProperty;
}
export interface IFactoryTypes {
    types(): string[];
}
export interface IReleasable {
    release(): void;
}
export interface IFilterFactory extends IFactoryTypes {
    create(id: string, name: string, settings?: ISettings): IFilter;
}
export interface IFilter extends ISource {
}
export interface IInputFactory extends IFactoryTypes {
    create(id: string, name: string, settings?: ISettings, hotkeys?: ISettings): IInput;
    createPrivate(id: string, name: string, settings?: ISettings): IInput;
    fromName(name: string): IInput;
    getPublicSources(): IInput[];
}
export declare const enum EInteractionFlags {
    None = 0,
    CapsKey = 1,
    ShiftKey = 2,
    ControlKey = 4,
    AltKey = 8,
    MouseLeft = 16,
    MouseMiddle = 32,
    MouseRight = 64,
    CommandKey = 128,
    Numlock_Key = 256,
    IsKeyPad = 512,
    IsLeft = 1024,
    IsRight = 2048
}
export declare const enum EMouseButtonType {
    Left = 0,
    Middle = 1,
    Right = 2
}
export interface IMouseEvent {
    modifiers: EInteractionFlags;
    x: number;
    y: number;
}
export interface IKeyEvent {
    modifiers: EInteractionFlags;
    text: string;
    nativeModifiers: number;
    nativeScancode: number;
    nativeVkey: number;
}
export interface ISceneItemInfo {
    name: string;
    crop: ICropInfo;
    scaleX: number;
    scaleY: number;
    visible: boolean;
    x: number;
    y: number;
    rotation: number;
}
export interface IInput extends ISource {
    volume: number;
    syncOffset: ITimeSpec;
    showing: boolean;
    audioMixers: number;
    monitoringType: EMonitoringType;
    deinterlaceFieldOrder: EDeinterlaceFieldOrder;
    deinterlaceMode: EDeinterlaceMode;
    duplicate(name?: string, isPrivate?: boolean): IInput;
    findFilter(name: string): IFilter;
    addFilter(filter: IFilter): void;
    removeFilter(filter: IFilter): void;
    sendMouseClick(eventData: IMouseEvent, type: EMouseButtonType, mouseUp: boolean, clickCount: number): void;
    sendMouseMove(eventData: IMouseEvent, mouseLeave: boolean): void;
    sendMouseWheel(eventData: IMouseEvent, x_delta: number, y_delta: number): void;
    sendFocus(focus: boolean): void;
    sendKeyClick(eventData: IKeyEvent, keyUp: boolean): void;
    setFilterOrder(filter: IFilter, movement: EOrderMovement): void;
    setFilterOrder(filter: IFilter, movement: EOrderMovement): void;
    readonly filters: IFilter[];
    readonly width: number;
    readonly height: number;
    getDuration(): number;
    seek: number;
    play(): void;
    pause(): void;
    restart(): void;
    stop(): void;
}
export interface ISceneFactory {
    create(name: string): IScene;
    createPrivate(name: string): IScene;
    fromName(name: string): IScene;
}
export interface IScene extends ISource {
    duplicate(name: string, type: ESceneDupType): IScene;
    add(source: IInput, transform?: ISceneItemInfo): ISceneItem;
    readonly source: IInput;
    moveItem(oldIndex: number, newIndex: number): void;
    orderItems(order: number[]): void;
    findItem(id: string | number): ISceneItem;
    getItemAtIdx(idx: number): ISceneItem;
    getItems(): ISceneItem[];
}
export interface ISceneItem {
    readonly source: IInput;
    readonly scene: IScene;
    readonly id: number;
    selected: boolean;
    position: IVec2;
    rotation: number;
    scale: IVec2;
    alignment: EAlignment;
    boundsAlignment: number;
    bounds: IVec2;
    boundsType: EBoundsType;
    scaleFilter: EScaleType;
    visible: boolean;
    streamVisible: boolean;
    recordingVisible: boolean;
    readonly transformInfo: ITransformInfo;
    crop: ICropInfo;
    moveUp(): void;
    moveDown(): void;
    moveTop(): void;
    moveBottom(): void;
    move(position: number): void;
    remove(): void;
    deferUpdateBegin(): void;
    deferUpdateEnd(): void;
}
export interface ITransitionFactory extends IFactoryTypes {
    create(id: string, name: string, settings?: ISettings, hotkeys?: ISettings): ITransition;
    createPrivate(id: string, name: string, settings?: ISettings): ITransition;
    fromName(name: string): ITransition;
}
export interface ITransition extends ISource {
    getActiveSource(): ISource;
    clear(): void;
    set(input: ISource): void;
    start(ms: number, input: ISource): void;
}
export interface IConfigurable {
    update(settings: ISettings): void;
    readonly configurable: boolean;
    readonly properties: IProperties;
    readonly settings: ISettings;
}
export interface ISource extends IConfigurable, IReleasable {
    remove(): void;
    save(): void;
    readonly status: number;
    readonly type: ESourceType;
    readonly id: string;
    readonly outputFlags: ESourceOutputFlags;
    name: string;
    flags: ESourceFlags;
    muted: boolean;
    enabled: boolean;
    readonly slowUncachedSettings: ISettings;
    callHandler(fuction_name: string, fuction_input: string): Object;
}
export interface IFaderFactory {
    create(type: EFaderType): IFader;
}
export interface IFader {
    db: number;
    deflection: number;
    mul: number;
    destroy(): void;
    attach(source: IInput): void;
    detach(): void;
    addCallback(cb: (db: number) => void): ICallbackData;
    removeCallback(cbData: ICallbackData): void;
}
export interface IVolmeterFactory {
    create(type: EFaderType): IVolmeter;
}
export interface IVolmeter {
    updateInterval: number;
    destroy(): void;
    attach(source: IInput): void;
    detach(): void;
    addCallback(cb: (magnitude: number[], peak: number[], inputPeak: number[]) => void): ICallbackData;
    removeCallback(cbData: ICallbackData): void;
}
export interface ICallbackData {
}
export interface IDisplayFactory {
    create(source?: IInput): IDisplay;
}
export interface IDisplay {
    destroy(): void;
    setPosition(x: number, y: number): void;
    getPosition(): IVec2;
    setSize(x: number, y: number): void;
    getSize(): IVec2;
    getPreviewOffset(): IVec2;
    getPreviewSize(x: number, y: number): void;
    shouldDrawUI: boolean;
    paddingSize: number;
    setPaddingColor(r: number, g: number, b: number, a: number): void;
    setBackgroundColor(r: number, g: number, b: number, a: number): void;
    setOutlineColor(r: number, g: number, b: number, a: number): void;
    setGuidelineColor(r: number, g: number, b: number, a: number): void;
    setResizeBoxOuterColor(r: number, g: number, b: number, a: number): void;
    setResizeBoxInnerColor(r: number, g: number, b: number, a: number): void;
}
export interface VideoContext {
    fpsNum: number;
    fpsDen: number;
    baseWidth: number;
    baseHeight: number;
    outputWidth: number;
    outputHeight: number;
    outputFormat: EVideoFormat;
    colorspace: EColorSpace;
    range: ERangeType;
    scaleType: EScaleType;
}
export interface IVideo {
    readonly skippedFrames: number;
    readonly encodedFrames: number;
    videoContext: VideoContext;
}
export interface IModuleFactory extends IFactoryTypes {
    open(binPath: string, dataPath: string): IModule;
    loadAll(): void;
    addPath(path: string, dataPath: string): void;
    logLoaded(): void;
    modules(): String[];
}
export interface IModule {
    initialize(): void;
    filename(): string;
    name(): string;
    author(): string;
    description(): string;
    binPath(): string;
    dataPath(): string;
    status(): number;
}
export declare function addItems(scene: IScene, sceneItems: ISceneItemInfo[]): ISceneItem[];
export interface FilterInfo {
    name: string;
    type: string;
    settings: ISettings;
    enabled: boolean;
}
export interface SyncOffset {
    sec: number;
    nsec: number;
}
export interface SourceInfo {
    filters: FilterInfo[];
    muted: boolean;
    name: string;
    settings: ISettings;
    type: string;
    volume: number;
    syncOffset: SyncOffset;
}
export declare function createSources(sources: SourceInfo[]): IInput[];
export interface ISourceSize {
    name: string;
    width: number;
    height: number;
    outputFlags: number;
}
export declare function getSourcesSize(sourcesNames: string[]): ISourceSize[];
export interface IServiceFactory {
    types(): string[];
    create(id: string, name: string, settings?: ISettings): IService;
    serviceContext: IService;
}
export interface IService {
    readonly name: string;
    readonly properties: IProperties;
    readonly settings: ISettings;
    readonly url: string;
    readonly key: string;
    readonly username: string;
    readonly password: string;
    update(settings: ISettings): void;
}
export declare const NodeObs: any;
