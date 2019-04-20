import React from 'react';
import ReactVirtualizedTable from '../../components/VirtualizedTable';

const Subpages = props => {
  return (
    <div>
      <center>
        <p>
          Aby umówić się na wizytę w klinice rentgenowskiej proszę wybrać z
          oferty interesujace Państwa prześwietlenie,
        </p>
        <p>
          po czym kliknąć przycisk <strong>'Umów wizytę'</strong>
        </p>
      </center>
      <br />
      <ReactVirtualizedTable groupId={props.groupId} />
    </div>
  );
};

export default Subpages;
