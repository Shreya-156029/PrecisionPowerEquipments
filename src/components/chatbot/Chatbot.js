import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        (function(d, m) {
            var kommunicateSettings = {
                "appId": "23d4c79502ef00000f81832375c872498",
                "popupWidget": true,
                "automaticChatOpenOnNavigation": true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, []);

    return (
        <div>chatbot</div>
    );
}

export default Chatbot;
