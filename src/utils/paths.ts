// paths.ts

const BASE_PATH = 'https://rooproots.github.io/kloak-bore';

export const getPath = (path: string): string => {
    return `${BASE_PATH}/${path}`;
};

export default BASE_PATH;