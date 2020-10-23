import React, {useEffect, useState} from 'react';

const ToDo = () => {
    const [add, setAdd]= useState(false)
    const [List, setList]= useState([])
    return (
        <div>
            
            <div>
              {!add &&
              <>
              <h3>Welcome back</h3>
              <button onClick={setAdd(true)}> + add task</button>
              </>}
              {add &&
              <div>
                  
              </div>}
            </div>
        </div>
    );
};

export default ToDo;