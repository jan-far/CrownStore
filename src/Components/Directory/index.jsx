import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelections } from '../../Redux/directory/directory.selector';
import MenuItem from '../Menu-item';
import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSections }) => (
        <MenuItem key={id} {...otherSections} />
      ))} 
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections,
});

export default connect(mapStateToProps)(Directory);
