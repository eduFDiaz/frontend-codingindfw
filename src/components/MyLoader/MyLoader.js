import React from "react";
import { Spin } from 'antd';
import classes from './MyLoader.css';

const Loader = (props) =>  {
      return (
         <div className={classes.example}>
            <Spin tip={props.tip} size="large" />
         </div>
      );
}

export default Loader;