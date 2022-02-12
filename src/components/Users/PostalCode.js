import React from 'react';

import Card from '../UI/Card';
import classes from './PostalCode.module.css';

const PostalCode = (props) => {
  return (
    <Card className={classes.postalcode}>
      <h5>Postal Code</h5>
      {props.isLoading && <h5>Loading...</h5>}
      {!props.isLoading && props.postalCode && <h1>{props.postalCode}</h1>}
      {!props.isLoading && !props.errMsg && !props.postalCode && <h5>No address yet</h5>}
      {!props.isLoading && props.errMsg && <h5>{props.errMsg}</h5>}
    </Card>
  );
};

export default PostalCode;
