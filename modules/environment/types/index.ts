export type EnvironmentType = {
    id: string,
    name: string,
    socket?: string,
    host?: string,
    port?: number,
    protocol?: 'http' | 'https',
    ca?: string,
    cert?: string,
    key?: string,
    version?: string
}