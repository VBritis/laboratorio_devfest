/* @ds-bundle: {"format":3,"namespace":"MAXDesignSystem_4b19a9","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"InfoRow","sourcePath":"components/lists/InfoRow.jsx"},{"name":"ListGroup","sourcePath":"components/lists/ListGroup.jsx"},{"name":"ListItem","sourcePath":"components/lists/ListItem.jsx"},{"name":"PinDots","sourcePath":"components/misc/PinDots.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"d6230e8c4209","components/buttons/IconButton.jsx":"d0d6243cd351","components/feedback/Banner.jsx":"3c664c7829a9","components/feedback/StatusPill.jsx":"af18ea9eee1d","components/feedback/Toast.jsx":"8c39cc2ac34a","components/forms/Input.jsx":"6a83538b235e","components/forms/Switch.jsx":"28879ac2e6ae","components/forms/Textarea.jsx":"13e40655cd30","components/lists/InfoRow.jsx":"519974ed11f2","components/lists/ListGroup.jsx":"6f77f8a91d57","components/lists/ListItem.jsx":"aad8c20c9f4a","components/misc/PinDots.jsx":"0375dba6a579","components/navigation/TabBar.jsx":"02797eaf5107","components/surfaces/Card.jsx":"d5dac418f424","ui_kits/max-app/HomeScreen.jsx":"e74a88d5036e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MAXDesignSystem_4b19a9 = window.MAXDesignSystem_4b19a9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX Button — the app's text CTA.
 * Variants: primary (white), secondary (outline), card (subtle fill), ghost (text-only).
 * Sizes: compact / default / extra. Optional leading/trailing icon.
 * Rule: purple is NEVER used on buttons — primary CTAs are always white.
 */
function Button({
  variant = 'primary',
  size = 'default',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...props
}) {
  const base = {
    width: '100%',
    fontFamily: 'inherit',
    borderRadius: 'var(--r-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background .15s, border-color .15s, color .15s, transform .15s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  };
  const sizes = {
    compact: {
      padding: '10px 14px',
      fontSize: '14px'
    },
    default: {
      padding: '14px 16px',
      fontSize: 'var(--fs-section)'
    },
    extra: {
      padding: '18px 22px',
      fontSize: 'var(--fs-section)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--c-white)',
      color: 'var(--c-deep-navy)',
      border: 'none',
      fontWeight: 'var(--fw-semibold)'
    },
    secondary: {
      background: 'transparent',
      color: 'rgba(255,255,255,.9)',
      border: 'var(--bd-width) solid var(--border-20)',
      fontWeight: 'var(--fw-medium)'
    },
    card: {
      background: 'var(--surface-07)',
      color: 'rgba(255,255,255,.75)',
      border: 'var(--bd-width) solid var(--border-10)',
      fontWeight: 'var(--fw-medium)'
    },
    ghost: {
      background: 'none',
      color: 'rgba(255,255,255,.85)',
      border: 'none',
      fontWeight: 'var(--fw-medium)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, props), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX icon button.
 * - "plain": 34×34, no background — screen-header actions (menu, notifications).
 * - "boxed": 40×40 rounded square, bg .06, optional label below — home shortcuts (Área Pix, Boleto).
 */
function IconButton({
  variant = 'plain',
  label = null,
  children,
  style = {},
  ...props
}) {
  if (variant === 'boxed') {
    return /*#__PURE__*/React.createElement("button", _extends({
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        ...style
      }
    }, props), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: 'var(--r-sm)',
        background: 'var(--surface-06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-primary)',
        transition: 'transform .15s, background .15s'
      }
    }, children), label != null && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)',
        fontSize: 'var(--fs-caption)'
      }
    }, label));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      width: '34px',
      height: '34px',
      borderRadius: 'var(--r-sm)',
      background: 'none',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      padding: 0,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    bg: 'rgba(46,179,118,.08)',
    bd: 'rgba(46,179,118,.28)',
    fg: 'rgba(90,220,150,.95)'
  },
  warning: {
    bg: 'rgba(251,191,36,.08)',
    bd: 'rgba(251,191,36,.28)',
    fg: 'rgba(251,191,36,.95)'
  },
  error: {
    bg: 'rgba(239,68,68,.08)',
    bd: 'rgba(239,68,68,.28)',
    fg: 'rgba(248,113,113,.95)'
  },
  info: {
    bg: 'rgba(96,165,250,.08)',
    bd: 'rgba(96,165,250,.28)',
    fg: 'rgba(147,197,253,.95)'
  }
};

/**
 * MAX semantic banner — persistent inline alert.
 * Tinted .08 fill, solid 1px border .28 (the border carries meaning here),
 * radius 16, icon left, title + description stacked.
 */
function Banner({
  tone = 'info',
  icon = null,
  title,
  children,
  style = {},
  ...props
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.bg,
      border: `var(--bd-width-semantic) solid ${t.bd}`,
      borderRadius: 'var(--r-md)',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: '1px',
      color: t.fg,
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title != null && /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.fg,
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: '4px'
    }
  }, title), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.55
    }
  }, children)));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DOTS = {
  success: {
    c: '#2EB376',
    ring: 'rgba(46,179,118,.18)'
  },
  warning: {
    c: '#F59E0B',
    ring: 'rgba(245,158,11,.18)'
  },
  error: {
    c: '#EF4444',
    ring: 'rgba(239,68,68,.18)'
  },
  neutral: {
    c: 'rgba(255,255,255,.6)',
    ring: 'rgba(255,255,255,.12)'
  }
};

/**
 * MAX status pill — a colored dot (with a soft ring) + inline label.
 * Used inline in content to indicate state: Ativa, Em análise, Perdido.
 */
function StatusPill({
  tone = 'success',
  children,
  style = {},
  ...props
}) {
  const d = DOTS[tone] || DOTS.success;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      color: 'rgba(255,255,255,.85)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: d.c,
      boxShadow: `0 0 0 3px ${d.ring}`,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX toast — transient floating confirmation. Green frosted pill.
 * Render conditionally on `show`; it fades/slides in from the top.
 */
function Toast({
  show = true,
  children,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px 18px',
      borderRadius: 'var(--r-lg)',
      background: 'rgba(46,179,118,.2)',
      border: 'var(--bd-width) solid rgba(46,179,118,.45)',
      color: 'var(--c-white)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      backdropFilter: 'var(--blur-md)',
      WebkitBackdropFilter: 'var(--blur-md)',
      whiteSpace: 'nowrap',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'opacity .25s, transform .25s',
      pointerEvents: 'none',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX form input with an optional uppercase label.
 * Surface .05, border .12 → focus border .3 / surface .08, radius 16, 16px text.
 */
function Input({
  label = null,
  style = {},
  wrapStyle = {},
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...wrapStyle
    }
  }, label != null && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      color: 'var(--text-tertiary)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: '6px',
      paddingLeft: '4px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      props.onBlur?.(e);
    },
    style: {
      width: '100%',
      padding: '12px 14px',
      background: focused ? 'var(--surface-08)' : 'var(--surface-05)',
      border: `var(--bd-width) solid ${focused ? 'rgba(255,255,255,.3)' : 'var(--border-12)'}`,
      borderRadius: 'var(--r-md)',
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-section)',
      fontFamily: 'inherit',
      outline: 'none',
      caretColor: 'rgba(255,255,255,.7)',
      transition: 'border-color .2s, background .2s',
      ...style
    }
  }, props)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX toggle switch. 38×22 track, 18px knob.
 * Off: track white .15, white knob. On: track white, navy knob slides right.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange?.(!checked),
    style: {
      width: '38px',
      height: '22px',
      borderRadius: '16px',
      background: checked ? 'var(--c-white)' : 'rgba(255,255,255,.15)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: 'none',
      padding: 0,
      flexShrink: 0,
      opacity: disabled ? 0.4 : 1,
      transition: 'background .2s',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: checked ? 'var(--c-deep-navy)' : 'var(--c-white)',
      boxShadow: '0 1px 3px rgba(0,0,0,.3)',
      transform: checked ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--dur-toggle) var(--ease-ios), background var(--dur-toggle)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX textarea. Surface .04, border .10 → focus-within border .25, radius 16.
 * Optional floating label that sits on the top border.
 */
function Textarea({
  label = null,
  rows = 3,
  style = {},
  wrapStyle = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...wrapStyle
    }
  }, label != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-8px',
      left: '12px',
      background: 'var(--c-black)',
      padding: '0 6px',
      color: 'var(--text-quaternary)',
      fontSize: 'var(--fs-caption)',
      zIndex: 1
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: {
      width: '100%',
      background: 'var(--surface-04)',
      border: 'var(--bd-width) solid var(--border-10)',
      borderRadius: 'var(--r-md)',
      padding: '16px 14px',
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-list)',
      fontFamily: 'inherit',
      outline: 'none',
      resize: 'none',
      lineHeight: 1.5,
      caretColor: 'rgba(255,255,255,.8)',
      transition: 'border-color .2s',
      ...style
    }
  }, props)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/lists/InfoRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX info row — view-only key/value pair (uppercase label over a value).
 * Use inside ListGroup for data screens (profile, account details).
 */
function InfoRow({
  label,
  value,
  children,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '14px 16px',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'rgba(255,255,255,.5)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: '4px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--c-white)',
      fontSize: 'var(--fs-section)',
      lineHeight: 1.35
    }
  }, value != null ? value : children));
}
Object.assign(__ds_scope, { InfoRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/InfoRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX list/settings group — a frosted rounded container that clips its rows
 * and draws 0.5px separators between them. Wrap ListItem / InfoRow children.
 * Same recipe as .settings-group and .info-group in the app.
 */
function ListGroup({
  children,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-04)',
      border: 'var(--bd-width) solid var(--border-08)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      backdropFilter: 'var(--blur-md)',
      WebkitBackdropFilter: 'var(--blur-md)',
      ...style
    }
  }, props), React.Children.toArray(children).filter(Boolean).map((child, i) => i === 0 ? child : React.cloneElement(child, {
    style: {
      borderTop: 'var(--bd-width) solid var(--border-06)',
      ...(child.props.style || {})
    }
  })));
}
Object.assign(__ds_scope, { ListGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "6",
  height: "10",
  viewBox: "0 0 6 10",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 1l4 4-4 4",
  stroke: "currentColor",
  strokeWidth: "1.2",
  strokeLinecap: "round"
}));

/**
 * MAX settings/list row — icon · label (+ optional sub) · optional trailing slot.
 * Tap target ≥ 44px (14px vertical padding). Use inside ListGroup.
 */
function ListItem({
  icon = null,
  title,
  sub = null,
  trailing = null,
  chevron = false,
  onClick,
  style = {},
  ...props
}) {
  const interactive = !!onClick || chevron;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '14px 16px',
      width: '100%',
      border: 'none',
      background: 'none',
      textAlign: 'left',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background .12s',
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,.75)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'rgba(255,255,255,.92)',
      fontSize: 'var(--fs-list)',
      lineHeight: 1.3
    }
  }, title, sub != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-tertiary)',
      fontSize: 'var(--fs-caption)',
      marginTop: '2px'
    }
  }, sub)), trailing, chevron && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.28)',
      flexShrink: 0,
      marginLeft: '4px',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Chevron, null)));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/misc/PinDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX PIN dots — progress indicator for PIN/passcode entry.
 * Filled dots turn purple; empty dots are translucent with a 1px ring.
 */
function PinDots({
  length = 6,
  filled = 0,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      ...style
    }
  }, props), Array.from({
    length
  }).map((_, i) => {
    const on = i < filled;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: on ? 'var(--c-purple)' : 'var(--surface-08)',
        border: `1px solid ${on ? 'var(--c-purple)' : 'rgba(255,255,255,.15)'}`,
        transition: 'background .15s, border-color .15s'
      }
    });
  }));
}
Object.assign(__ds_scope, { PinDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/PinDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX bottom tab bar — frosted navy bar (blur 32). The active tab gets a
 * white-fill pill, a purple glow, and a small purple marker bar on top.
 *
 * tabs: [{ key, icon, label? }]. Active tab matches `active` against key.
 */
function TabBar({
  tabs = [],
  active,
  onChange,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '4px',
      padding: '10px 4px',
      background: 'rgba(20,14,40,.85)',
      border: 'var(--bd-width) solid var(--border-08)',
      borderRadius: 'var(--r-md)',
      backdropFilter: 'var(--blur-lg)',
      WebkitBackdropFilter: 'var(--blur-lg)',
      ...style
    }
  }, props), tabs.map(t => {
    const on = t.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => onChange?.(t.key),
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '8px 14px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--surface-08)' : 'transparent',
        boxShadow: on ? 'var(--glow-purple)' : 'none',
        opacity: on ? 1 : 0.4,
        color: 'var(--c-white)',
        transition: 'all .25s'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '-2px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20px',
        height: '3px',
        borderRadius: '2px',
        background: 'var(--c-purple)',
        filter: 'blur(2px)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex'
      }
    }, t.icon), t.label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)'
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MAX card surface.
 * - "generic" (default): surface .04, border .08, radius 16, blur 20.
 * - "hero": surface .05, border .10, with a soft purple ambient glow at the top.
 * - "receipt": deep navy fill with a solid purple 1px border (chat receipts).
 */
function Card({
  variant = 'generic',
  children,
  style = {},
  ...props
}) {
  const variants = {
    generic: {
      background: 'var(--surface-04)',
      border: 'var(--bd-width) solid var(--border-08)',
      borderRadius: 'var(--r-md)',
      padding: '16px',
      backdropFilter: 'var(--blur-md)',
      WebkitBackdropFilter: 'var(--blur-md)'
    },
    hero: {
      background: 'var(--surface-05)',
      border: 'var(--bd-width) solid var(--border-10)',
      borderRadius: 'var(--r-md)',
      padding: '18px 18px 14px',
      backdropFilter: 'var(--blur-md)',
      WebkitBackdropFilter: 'var(--blur-md)',
      position: 'relative',
      overflow: 'hidden'
    },
    receipt: {
      background: '#0d0a1c',
      border: 'var(--bd-width-semantic) solid var(--c-purple-solid)',
      borderRadius: 'var(--r-md)',
      padding: '16px 16px 12px'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...variants[variant],
      ...style
    }
  }, props), variant === 'hero' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(155,106,250,.08), transparent 70%)',
      pointerEvents: 'none'
    }
  }), variant === 'hero' ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/max-app/HomeScreen.jsx
try { (() => {
/* MAX app — Home screen. Composes DS primitives from window.DesignSystem_4b19a9. */
(function () {
  const DS = window.DesignSystem_4b19a9;
  const {
    Card,
    IconButton,
    ListGroup,
    ListItem,
    StatusPill,
    TabBar,
    Toast
  } = DS;

  // ── Icons (stroked, feather/Lucide-style, matching MAX's general set) ──
  const S = (p, extra = {}) => /*#__PURE__*/React.createElement("svg", {
    width: extra.size || 20,
    height: extra.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: extra.w || 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p);
  const Icons = {
    menu: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "7",
      x2: "20",
      y2: "7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "12",
      x2: "20",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "17",
      x2: "20",
      y2: "17"
    }))),
    bell: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    }))),
    pix: S(/*#__PURE__*/React.createElement("path", {
      d: "M12 3l4.5 4.5a2 2 0 0 1 0 2.8L12 14.8 7.5 10.3a2 2 0 0 1 0-2.8L12 3zM12 9.2l4.5 4.5L12 18.2 7.5 13.7 12 9.2z"
    }), {
      w: 1.4
    }),
    boleto: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      y1: "9",
      x2: "7",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      y1: "9",
      x2: "11",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "9",
      x2: "18",
      y2: "15"
    }))),
    send: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2"
    }))),
    qr: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14",
      y1: "14",
      x2: "14",
      y2: "21"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "14",
      x2: "21",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "18",
      x2: "21",
      y2: "21"
    }))),
    card: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "6",
      width: "20",
      height: "12",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "10",
      x2: "22",
      y2: "10"
    }))),
    shield: S(/*#__PURE__*/React.createElement("path", {
      d: "M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3z"
    })),
    chart: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "20",
      x2: "4",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "20",
      x2: "10",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "20",
      x2: "16",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "20",
      x2: "20",
      y2: "9"
    }))),
    in: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "17",
      y1: "7",
      x2: "7",
      y2: "17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 7 17 7 8"
    })), {
      size: 18
    }),
    out: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8 7 17 7 17 16"
    })), {
      size: 18
    }),
    home: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 10l9-7 9 7v10a1.5 1.5 0 0 1-1.5 1.5h-4V14h-7v7.5h-4A1.5 1.5 0 0 1 3 20z"
    })),
    chat: S(/*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }), {
      size: 22
    }),
    mic: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23"
    })), {
      size: 22
    }),
    user: S(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 4-6 8-6s8 2 8 6"
    })))
  };
  function Tx({
    icon,
    name,
    when,
    amount,
    positive
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--r-pill)',
        background: 'var(--surface-06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: positive ? 'var(--c-green-in)' : 'var(--text-secondary)',
        flexShrink: 0
      }
    }, icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-list",
      style: {
        color: 'rgba(255,255,255,.92)',
        fontWeight: 'var(--fw-medium)'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      className: "t-caption",
      style: {
        color: 'var(--text-tertiary)',
        marginTop: 2
      }
    }, when)), /*#__PURE__*/React.createElement("div", {
      className: "t-list",
      style: {
        fontWeight: 'var(--fw-medium)',
        color: positive ? 'var(--c-green-in)' : 'var(--text-primary)'
      }
    }, positive ? '+ ' : '− ', "R$ ", amount));
  }
  window.HomeScreen = function HomeScreen() {
    const [tab, setTab] = React.useState('home');
    const [toast, setToast] = React.useState(false);
    const fire = () => {
      setToast(true);
      clearTimeout(window._t);
      window._t = setTimeout(() => setToast(false), 2000);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--ambient)',
        pointerEvents: 'none',
        zIndex: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 64,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 30
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      show: toast
    }, "Chave Pix copiada")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        flex: 1,
        overflowY: 'auto',
        paddingBottom: 170
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '20px 20px 12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--r-pill)',
        background: 'var(--surface-08)',
        border: 'var(--bd-width) solid var(--border-12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)'
      }
    }, Icons.user), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-caption",
      style: {
        color: 'var(--text-tertiary)'
      }
    }, "Boa tarde,"), /*#__PURE__*/React.createElement("div", {
      className: "t-body",
      style: {
        color: 'var(--text-primary)'
      }
    }, "Junior Store")), /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "Notifica\xE7\xF5es"
    }, Icons.bell), /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "Menu"
    }, Icons.menu)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "hero"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "t-label",
      style: {
        color: 'var(--text-tertiary)',
        whiteSpace: 'nowrap'
      }
    }, "Conta empresarial"), /*#__PURE__*/React.createElement(StatusPill, {
      tone: "success"
    }, "Ativa")), /*#__PURE__*/React.createElement("div", {
      className: "t-caption",
      style: {
        color: 'var(--text-tertiary)',
        marginBottom: 2
      }
    }, "Saldo dispon\xEDvel"), /*#__PURE__*/React.createElement("div", {
      className: "t-display",
      style: {
        marginBottom: 16
      }
    }, "R$ 18.920,50"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "boxed",
      label: "\xC1rea Pix",
      onClick: fire
    }, Icons.pix), /*#__PURE__*/React.createElement(IconButton, {
      variant: "boxed",
      label: "Pagar"
    }, Icons.boleto), /*#__PURE__*/React.createElement(IconButton, {
      variant: "boxed",
      label: "Transferir"
    }, Icons.send), /*#__PURE__*/React.createElement(IconButton, {
      variant: "boxed",
      label: "Cobrar"
    }, Icons.qr)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-label",
      style: {
        color: 'var(--text-tertiary)',
        margin: '0 4px 8px'
      }
    }, "Atalhos"), /*#__PURE__*/React.createElement(ListGroup, null, /*#__PURE__*/React.createElement(ListItem, {
      icon: Icons.card,
      title: "Meus cart\xF5es",
      sub: "Cr\xE9dito, d\xE9bito e virtuais",
      chevron: true
    }), /*#__PURE__*/React.createElement(ListItem, {
      icon: Icons.shield,
      title: "Disputas & MED",
      trailing: /*#__PURE__*/React.createElement(StatusPill, {
        tone: "warning"
      }, "2 em an\xE1lise"),
      chevron: true
    }), /*#__PURE__*/React.createElement(ListItem, {
      icon: Icons.chart,
      title: "Relat\xF3rios",
      sub: "Entradas e sa\xEDdas do m\xEAs",
      chevron: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-label",
      style: {
        color: 'var(--text-tertiary)',
        margin: '0 4px 8px'
      }
    }, "Atividade recente"), /*#__PURE__*/React.createElement(ListGroup, null, /*#__PURE__*/React.createElement(Tx, {
      icon: Icons.in,
      name: "Pix recebido \xB7 Maria Silva",
      when: "Hoje, 14:32",
      amount: "250,00",
      positive: true
    }), /*#__PURE__*/React.createElement(Tx, {
      icon: Icons.out,
      name: "Pagamento \xB7 Fornecedor X",
      when: "Hoje, 09:10",
      amount: "1.480,00"
    }), /*#__PURE__*/React.createElement(Tx, {
      icon: Icons.in,
      name: "Cobran\xE7a paga \xB7 Pedido #882",
      when: "Ontem, 18:05",
      amount: "320,00",
      positive: true
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 20,
        padding: '0 16px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-05)',
        border: 'var(--bd-width) solid var(--border-14)',
        borderRadius: 'var(--r-lg)',
        padding: '14px 18px',
        backdropFilter: 'var(--blur-md)',
        WebkitBackdropFilter: 'var(--blur-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-list",
      style: {
        color: 'var(--text-tertiary)'
      }
    }, "Ol\xE1, como posso ajudar?")), /*#__PURE__*/React.createElement(TabBar, {
      active: tab,
      onChange: setTab,
      tabs: [{
        key: 'home',
        icon: Icons.home
      }, {
        key: 'chat',
        icon: Icons.chat
      }, {
        key: 'mic',
        icon: Icons.mic
      }]
    })));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/max-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.InfoRow = __ds_scope.InfoRow;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.PinDots = __ds_scope.PinDots;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Card = __ds_scope.Card;

})();
