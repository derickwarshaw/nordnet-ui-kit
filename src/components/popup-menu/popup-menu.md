    const { PopupMenuItem } = require('./');
    const { HashRouter, Link } = require('../../../node_modules/react-router-dom');
    <HashRouter>
        <div style={{display: 'flex', marginLeft: 200}}>
            <PopupMenu>
              <PopupMenuItem disabled node={Link}>
                Disabled link
              </PopupMenuItem>
              <PopupMenuItem node={Link}>
                Link
              </PopupMenuItem>
              <PopupMenuItem>
                Button
              </PopupMenuItem>
              <PopupMenuItem disabled>
                Disabled button
              </PopupMenuItem>
            </PopupMenu>
        </div>
    </HashRouter>
