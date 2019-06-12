export declare const Classes: {
    NS: string;
    CODE_EDITOR: string;
    SIMPLE_TAB: string;
    SIMPLE_TAB_LIST: string;
    SIMPLE_TAB_PANEL: string;
    SCROLL_TRACK: string;
    SCROLL_THUMB: string;
    SCROLL_CONTAINER: string;
    getClassNamespace(): string;
    alignmentClass(alignment: "left" | "right" | "center"): string;
    elevationClass(elevation: 0 | 1 | 2 | 3 | 4): string;
    iconClass(iconName?: string | undefined): string;
    intentClass(intent?: "none" | "primary" | "success" | "warning" | "danger" | undefined): string;
    positionClass(position: "bottom" | "bottom-left" | "bottom-right" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top" | "top-left" | "top-right"): string;
    ACTIVE: string;
    ALIGN_LEFT: string;
    ALIGN_RIGHT: string;
    DARK: string;
    DISABLED: string;
    FILL: string;
    FIXED: string;
    FIXED_TOP: string;
    INLINE: string;
    INTERACTIVE: string;
    LARGE: string;
    LOADING: string;
    MINIMAL: string;
    MULTILINE: string;
    ROUND: string;
    SMALL: string;
    VERTICAL: string;
    POSITION_TOP: string;
    POSITION_BOTTOM: string;
    POSITION_LEFT: string;
    POSITION_RIGHT: string;
    ELEVATION_0: string;
    ELEVATION_1: string;
    ELEVATION_2: string;
    ELEVATION_3: string;
    ELEVATION_4: string;
    INTENT_PRIMARY: string;
    INTENT_SUCCESS: string;
    INTENT_WARNING: string;
    INTENT_DANGER: string;
    FOCUS_DISABLED: string;
    UI_TEXT: string;
    RUNNING_TEXT: string;
    MONOSPACE_TEXT: string;
    TEXT_LARGE: string;
    TEXT_SMALL: string;
    TEXT_MUTED: string;
    TEXT_DISABLED: string;
    TEXT_OVERFLOW_ELLIPSIS: string;
    BLOCKQUOTE: string;
    CODE: string;
    CODE_BLOCK: string;
    HEADING: string;
    LIST: string;
    LIST_UNSTYLED: string;
    RTL: string;
    ALERT: string;
    ALERT_BODY: string;
    ALERT_CONTENTS: string;
    ALERT_FOOTER: string;
    BREADCRUMB: string;
    BREADCRUMB_CURRENT: string;
    BREADCRUMBS: string;
    BREADCRUMBS_COLLAPSED: string;
    BUTTON: string;
    BUTTON_GROUP: string;
    BUTTON_SPINNER: string;
    BUTTON_TEXT: string;
    CALLOUT: string;
    CALLOUT_ICON: string;
    CARD: string;
    COLLAPSE: string;
    COLLAPSE_BODY: string;
    COLLAPSIBLE_LIST: string;
    CONTEXT_MENU: string;
    CONTEXT_MENU_POPOVER_TARGET: string;
    CONTROL_GROUP: string;
    DIALOG: string;
    DIALOG_CONTAINER: string;
    DIALOG_BODY: string;
    DIALOG_CLOSE_BUTTON: string;
    DIALOG_FOOTER: string;
    DIALOG_FOOTER_ACTIONS: string;
    DIALOG_HEADER: string;
    DIVIDER: string;
    DRAWER: string;
    DRAWER_BODY: string;
    DRAWER_FOOTER: string;
    DRAWER_HEADER: string;
    EDITABLE_TEXT: string;
    EDITABLE_TEXT_CONTENT: string;
    EDITABLE_TEXT_EDITING: string;
    EDITABLE_TEXT_INPUT: string;
    EDITABLE_TEXT_PLACEHOLDER: string;
    FLEX_EXPANDER: string;
    HTML_SELECT: string;
    SELECT: string;
    HTML_TABLE: string;
    HTML_TABLE_BORDERED: string;
    HTML_TABLE_CONDENSED: string;
    HTML_TABLE_STRIPED: string;
    INPUT: string;
    INPUT_GHOST: string;
    INPUT_GROUP: string;
    INPUT_ACTION: string;
    CONTROL: string;
    CONTROL_INDICATOR: string;
    CONTROL_INDICATOR_CHILD: string;
    CHECKBOX: string;
    RADIO: string;
    SWITCH: string;
    SWITCH_INNER_TEXT: string;
    FILE_INPUT: string;
    FILE_INPUT_HAS_SELECTION: string;
    FILE_UPLOAD_INPUT: string;
    KEY: string;
    KEY_COMBO: string;
    MODIFIER_KEY: string;
    HOTKEY: string;
    HOTKEY_LABEL: string;
    HOTKEY_COLUMN: string;
    HOTKEY_DIALOG: string;
    LABEL: string;
    FORM_GROUP: string;
    FORM_CONTENT: string;
    FORM_HELPER_TEXT: string;
    MENU: string;
    MENU_ITEM: string;
    MENU_ITEM_LABEL: string;
    MENU_SUBMENU: string;
    MENU_DIVIDER: string;
    MENU_HEADER: string;
    NAVBAR: string;
    NAVBAR_GROUP: string;
    NAVBAR_HEADING: string;
    NAVBAR_DIVIDER: string;
    NON_IDEAL_STATE: string;
    NON_IDEAL_STATE_VISUAL: string;
    NUMERIC_INPUT: string;
    OVERFLOW_LIST: string;
    OVERFLOW_LIST_SPACER: string;
    OVERLAY: string;
    OVERLAY_BACKDROP: string;
    OVERLAY_CONTAINER: string;
    OVERLAY_CONTENT: string;
    OVERLAY_INLINE: string;
    OVERLAY_OPEN: string;
    OVERLAY_SCROLL_CONTAINER: string;
    PANEL_STACK: string;
    PANEL_STACK_HEADER: string;
    PANEL_STACK_HEADER_BACK: string;
    PANEL_STACK_VIEW: string;
    POPOVER: string;
    POPOVER_ARROW: string;
    POPOVER_BACKDROP: string;
    POPOVER_CONTENT: string;
    POPOVER_CONTENT_SIZING: string;
    POPOVER_DISMISS: string;
    POPOVER_DISMISS_OVERRIDE: string;
    POPOVER_OPEN: string;
    POPOVER_TARGET: string;
    POPOVER_WRAPPER: string;
    TRANSITION_CONTAINER: string;
    PROGRESS_BAR: string;
    PROGRESS_METER: string;
    PROGRESS_NO_STRIPES: string;
    PROGRESS_NO_ANIMATION: string;
    PORTAL: string;
    SKELETON: string;
    SLIDER: string;
    SLIDER_AXIS: string;
    SLIDER_HANDLE: string;
    SLIDER_LABEL: string;
    SLIDER_TRACK: string;
    SLIDER_PROGRESS: string;
    START: string;
    END: string;
    SPINNER: string;
    SPINNER_ANIMATION: string;
    SPINNER_HEAD: string;
    SPINNER_NO_SPIN: string;
    SPINNER_TRACK: string;
    TAB: string;
    TAB_INDICATOR: string;
    TAB_INDICATOR_WRAPPER: string;
    TAB_LIST: string;
    TAB_PANEL: string;
    TABS: string;
    TAG: string;
    TAG_REMOVE: string;
    TAG_INPUT: string;
    TAG_INPUT_ICON: string;
    TAG_INPUT_VALUES: string;
    TOAST: string;
    TOAST_CONTAINER: string;
    TOAST_MESSAGE: string;
    TOOLTIP: string;
    TOOLTIP_INDICATOR: string;
    TREE: string;
    TREE_NODE: string;
    TREE_NODE_CARET: string;
    TREE_NODE_CARET_CLOSED: string;
    TREE_NODE_CARET_NONE: string;
    TREE_NODE_CARET_OPEN: string;
    TREE_NODE_CONTENT: string;
    TREE_NODE_EXPANDED: string;
    TREE_NODE_ICON: string;
    TREE_NODE_LABEL: string;
    TREE_NODE_LIST: string;
    TREE_NODE_SECONDARY_LABEL: string;
    TREE_NODE_SELECTED: string;
    TREE_ROOT: string;
    ICON: string;
    ICON_STANDARD: string;
    ICON_LARGE: string;
};