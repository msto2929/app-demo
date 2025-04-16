import React, { useEffect } from 'react';

const TwitterWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', '');
    script.setAttribute('charset', 'utf-8');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ height: '600px', overflow: 'auto' }}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/yoshirin100?ref_src=twsrc%5Etfw"
        data-chrome="noheader nofooter noborders"
      >
        Tweets by @yoshirin100
      </a>
    </div>
  );
};

export default TwitterWidget;


