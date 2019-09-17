import React from 'react';
import { Link } from 'react-router-dom';

export default function View2() {
    return (
        <div>
            This component is the view 2
            <div>
              <Link to="/example2">Next</Link>
          </div>
        </div>
    )
}
