import { useEffect, useCallback, useState } from 'react';
import { getGPUTier, TierResult } from "detect-gpu";
import { ContentBlock } from "./ContentBlock";
import { screenResolution } from './screenResolution';

export const GPU = () => {
  const [g, setG] = useState<TierResult>();

  const getGpu = useCallback(async () => {
    const gpuTier = await getGPUTier();
    setG(gpuTier);
  }, [setG]);

  useEffect(() => {
    getGpu();
  }, [getGpu]);

  return (
    <>
      <ContentBlock
        title="Разрешение экрана"
        value={`${screenResolution}${g?.fps ? ` / ${g?.fps} fps` : ''}`}
      />
      <ContentBlock
        title="Gpu"
        value={g?.gpu}
      />
      <ContentBlock
        title="Мобильное устройство"
        value={g?.isMobile ? 'Да' : 'Нет'}
      />
    </>
  )
}
