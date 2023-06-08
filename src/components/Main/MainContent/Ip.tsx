import { useEffect, useCallback, useState } from 'react';
import { ContentBlock } from "./ContentBlock";
import { screenResolution } from './screenResolution';
import { useSWRConfig } from 'swr';

function getRealLocation() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

const fields = `status,message,country,countryCode,
region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,reverse,proxy,hosting,query`;

export const Ip = () => {
  const [i, setI] = useState<string>('');
  const [g, setG] = useState<Response>();
  const [vp, setVP] = useState<boolean>();

  const getIp = useCallback(async () => {
    try {
      const v4 = await fetch('https://ipv4.lafibre.info/ip.php').
        then(function (res) { return res.text() });
      setI(v4);

      const geoData = await fetch(`http://ip-api.com/json/${v4}?fields=${fields}`).
        then(function (res) { return res.json() });
      setG(geoData);

      const rLoc = getRealLocation();
      setVP(rLoc == geoData?.timezone);

    } catch {

    }
  }, [setI, setG]);

  useEffect(() => {
    getIp();
  }, [getIp]);

  return (
    <>
      <ContentBlock
        title="IPv4-адрес"
        value={i}
      />
      <ContentBlock
        title="VPN"
        value={vp ? 'Нет' : 'Да'}
      />
      <ContentBlock
        title="Страна"
        value={g?.country}
      />
      <ContentBlock
        title="Код"
        value={g?.countryCode}
      />
      <ContentBlock
        title="Город"
        value={g?.city}
      />
      <ContentBlock
        title="Часовой пояс"
        value={g?.timezone}
      />
      <ContentBlock
        title="Latitude"
        value={g?.lat?.toString()}
      />
      <ContentBlock
        title="Longitude"
        value={g?.lon?.toString()}
      />
      <ContentBlock
        title="Провайдер"
        value={g?.isp}
      />
      <ContentBlock
        title="PTR запись (Reverse DNS)"
        value={g?.reverse}
      />
      <ContentBlock
        title="Прокси"
        value={g?.proxy ? 'Да' : 'Нет'}
      />
      <ContentBlock
        title="Хостинг"
        value={g?.hosting ? 'Да' : 'Нет'}
      />
    </>
  )
}

interface Response {
  status?: string;
  country?: string;
  countryCode?: string;
  regionName?: string;
  city?: string;
  district?: string;
  zip?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  isp?: string;
  org?: string;
  as?: string;
  reverse?: string;
  proxy?: boolean;
  hosting?: boolean;
  query?: string;
}
