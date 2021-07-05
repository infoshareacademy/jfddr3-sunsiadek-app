import { useState } from 'react';

export const UserDescription = () => {
  const [description, setDescription] = useState('abc');
  const [isInEditMode, setIsInEditMode] = useState(false);

  const changeEditMode = () => {
    setIsInEditMode(!isInEditMode);
  };

  const updateValue = () => {
    // setIsInEditMode(!isInEditMode);
  };

  const renderEditView = () => {
    return (
      <>
        <div>
          <input type="text" defaultValue={description} />
        </div>
        <button onClick={changeEditMode}>X</button>
        <button onClick={updateValue}>ok</button>
      </>
    );
  };

  const renderDefaultView = () => {
    return <div onDoubleClick={changeEditMode}>{description}</div>;
  };

  return isInEditMode ? renderEditView() : renderDefaultView();
};
