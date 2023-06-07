let os = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) os="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) os="Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) os="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) os="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) os="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) os="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) os="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) os="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) os="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) os="Linux";

export default os;
