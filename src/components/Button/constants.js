const types = ['primary', 'secondary', 'primary-outline', 'secondary-outline'];
const sharedStyle = {
  padding: '10px 16px 8px 16px',
  fontSize: '16px'
}

const primaryStyle = {
  ...sharedStyle,
  backgroundColor: '#3EACA8',
  color: '#FFFFFF',
  border: 'none'
}
const secondaryStyle = {
  ...sharedStyle,
  backgroundColor: '#C4C4C4',
  border: 'none'
}
const primaryOutlineStyle = {
  ...sharedStyle,
  backgroundColor: '#FFFFFF',
  border: '2px solid #3EACA8',
  color: '#3EACA8'
}
const secondaryOutlineStyle = {
  ...sharedStyle,
  backgroundColor: '#FFFFFF',
  border: '2px solid #2F2E41',
  color: '#2F2E41'
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