export const shouldShowDarkMode = () =>
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const textColorByBackgroundColorHex = (hex: string) => {
  const color = hexToRgb(hex);
  if (!color) {
    return 'text-black';
  }
  if (color.r * 0.299 + color.g * 0.587 + color.b * 0.114 > 186) {
    return 'text-black';
  } else {
    return 'text-white';
  }
};
