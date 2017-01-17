Note: onClickOutside doesn't work with Styleguidist atm. Known issue with HOCs.

    <div>
      <div>
        <span>This is some text that requires a tooltip.</span>
        <Tooltip content="This question mark is the default tooltip container." />
      </div>
      <br />
      <div>
        <span>Hover to show, click to toggle:</span>
        <Tooltip content="Text as the container will appear as a link.">
          <span style={{fontSize: '40px'}}>Hello world!</span>
        </Tooltip>
      </div>
      <br />
      <div>
        <span>This Tooltip contains some HTML:</span>
        <Tooltip content={ <span>This is a <u>span</u>!</span> } />
      </div>
    </div>