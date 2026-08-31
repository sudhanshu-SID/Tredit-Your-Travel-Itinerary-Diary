import React from 'react';
import clsx from 'clsx';

const Icon = ({ name, className, filled = false, ...props }) => {
  return (
    <span 
      className={clsx(
        "material-symbols-outlined", 
        className
      )}
      style={{
           fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
           verticalAlign: 'middle'
      }}
      data-icon={name}
      {...props}
    >
      {name}
    </span>
  );
};

export default Icon;
