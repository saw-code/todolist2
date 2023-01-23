import React from 'react';

type SuperButtonPropsType = {
  name: string
  callBack: () => void
}

export function SuperButton(props: SuperButtonPropsType) {

  const onclickHandler = () => {
    props.callBack()
  }

  return (
    <button onClick={onclickHandler}>{props.name}</button>
  )
}
