import { createContext, useState, ReactNode } from 'react';

type SensorContextType = {
  selectedSensor: string;
  setSelectedSensor: (value: string) => void;
};

const SensorContext = createContext<SensorContextType | undefined>(undefined);

type SensorProviderProps = {
  children: ReactNode;
};

const SensorProvider = ({ children }: SensorProviderProps) => {
  const [selectedSensor, setSelectedSensor] = useState<string>('');

  return (
    <SensorContext.Provider value={{ selectedSensor, setSelectedSensor }}>
      {children}
    </SensorContext.Provider>
  );
};

export { SensorContext, SensorProvider };
