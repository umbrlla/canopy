const types = ['primary', 'secondary', 'primary-outline', 'secondary-outline'];
const primaryStyle = {
  backgroundColor: '#3EACA8'
}
const secondaryStyle = {
  backgroundColor: '#C4C4C4'
}
const primaryOutlineStyle = {
  backgroundColor: '#FFFFFF',
  outline: '2px solid #3EACA8'
}
const secondaryOutlineStyle = {
  backgroundColor: '#FFFFFF',
  outline: '2px solid #2F2E41'
}

function selectStyle(style) {
  switch (style) {
    case 'secondary':
      return secondaryStyle;
    case 'primary-outline':
      return primaryOutlineStyle;
    case 'secondary-outline':
      return secondaryOutlineStyle;
    default:
      return primaryStyle;
  }
}

export {
  types,
  selectStyle
};