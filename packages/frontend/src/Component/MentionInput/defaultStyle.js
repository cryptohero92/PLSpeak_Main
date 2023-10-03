export default {
    control: {
      fontSize: 18,
      fontWeight: 'normal',
    },
  
    '&multiLine': {
      control: {
        // fontFamily: 'monospace',
        minHeight: 100,
      },
      highlighter: {
        padding: 9,
        border: '1px solid transparent',
      },
      input: {
        padding: 9,
        border: 'none',
        outline: 'none'
      },
    },
  
    '&singleLine': {
      display: 'inline-block',
      width: 180,
  
      highlighter: {
        padding: 1,
        border: '2px inset transparent',
      },
      input: {
        padding: 1,
        border: '2px inset',
        color:"#fff"
      },
    },
  
    suggestions: {
      list: {
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.15)',
        fontSize: 14,
      },
      item: {
        // backgroundColor: 'red',
        color:'#000',
        padding: '5px 15px',
        borderBottom: '1px solid rgba(0,0,0,0.15)',
        '&focused': {
          background: `linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)`,
          color: `#fff`
        },
      },
    },
  }