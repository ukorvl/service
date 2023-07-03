import { useEffect, useCallback, useState } from 'react';
import { ContentBlock } from "./ContentBlock";
import { screenResolution } from './screenResolution';
import { useSWRConfig } from 'swr';
import { isTor } from './isTor';
import { useIsTor } from './useIsTor';

function getRealLocation() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

const fields = `status,message,country,countryCode,
region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,reverse,proxy,hosting,query`;

// eslint-disable-next-line jsdoc/require-jsdoc
export const Ip = () => {
  const [i, setI] = useState<string>('');
  const [g, setG] = useState<Response>();
  const [vp, setVP] = useState<boolean>();
  const isTor = useIsTor();

  const getIp = useCallback(async () => {
    try {
      const v4 = await fetch('https://ipv4.lafibre.info/ip.php').
        then(function (res) { return res.text() });
      setI(v4);

      const geoData = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_API_KEY}&ip=${v4}`).
        then(function (res) { return res.json() });
      setG(geoData);

      const rLoc = getRealLocation();
      setVP(rLoc == geoData?.time_zone.name);

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
        value={g?.country_name}
      />
      <ContentBlock
        title="Код"
        value={g?.country_code2}
      />
      <ContentBlock
        title="Город"
        value={g?.city}
      />
      <ContentBlock
        title="Часовой пояс"
        value={g?.time_zone.name}
      />
      <ContentBlock
        title="Текущее время"
        value={g?.time_zone.current_time ? getHumanReadableDate(g?.time_zone.current_time) : ''}
      />
      <ContentBlock
        title="Latitude"
        value={g?.latitude?.toString()}
      />
      <ContentBlock
        title="Longitude"
        value={g?.longitude?.toString()}
      />
      <ContentBlock
        title="Провайдер"
        value={g?.isp}
      />
      <ContentBlock
        title="Прокси"
        value={false ? 'Да' : 'Нет'}
      />
      <ContentBlock
        title="Хостинг"
        value={false ? 'Да' : 'Нет'}
      />
      <ContentBlock
        title="TOR-браузер"
        value={isTor ? 'Да' : 'Нет'}
      />
    </>
  )
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface TimeZone {
  name: string;
  offset: number;
  current_time: string;
  current_time_unix: number;
  is_dst: boolean;
  dst_savings: number;
}

interface Response {
  ip: string;
  continent_code: string;
  continent_name: string;
  country_code2: string;
  country_code3: string;
  country_name: string;
  country_capital: string;
  state_prov: string;
  state_code: string;
  district: string;
  city: string;
  zipcode: string;
  latitude: string;
  longitude: string;
  is_eu: boolean;
  calling_code: string;
  country_tld: string;
  languages: string;
  country_flag: string;
  geoname_id: number;
  isp: string;
  connection_type: string;
  organization: string;
  currency: Currency;
  time_zone: TimeZone;
}

function getHumanReadableDate(date: string) {
  if (!date) {
    return 'Не определено';
  }

  let result = '';
  const d = new Date(date);
  const hours = d.getHours().toString();
  const mins = d.getMinutes().toString();
  const secs = d.getSeconds().toString();

  result += (hours.length === 1 ? `0${hours}` : hours) + ':'
  result += (mins.length === 1 ? `0${mins}` : mins) + ':'
  result += (secs.length === 1 ? `0${secs}` : secs)

  return result;
}
