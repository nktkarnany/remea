import type { GlobalThemeOverrides } from 'naive-ui';

export const BTN_THEME_OVERRIDES: GlobalThemeOverrides['Button'] = {
  heightTiny: 'calc(var(--base-margin) * 2)',
  heightSmall: 'calc(var(--base-margin) * 2)',
  heightMedium: 'calc(var(--base-margin) * 3.75)',
  heightLarge: 'calc(var(--base-margin) * 5)',
  borderRadiusTiny: '4px',
  borderRadiusSmall: '4px',
  borderRadiusMedium: '6px',
  borderRadiusLarge: '6px',
  fontSizeTiny: 'calc(var(--base-font) * 0.75)',
  fontSizeSmall: 'calc(var(--base-font) * 0.875)',
  fontSizeMedium: 'calc(var(--base-font) * 1)',
  fontSizeLarge: 'calc(var(--base-font) * 1.125)'
};
