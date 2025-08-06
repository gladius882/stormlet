export type ContainerType = {
    Id: string,
    Names: string[],
    Image: string,
    ImageId: string,
    Command: string,
    Created: string,
    Ports: {
        IP: string,
        PrivatePort: string,
        PublicPort: string
    }[],
    Labels: any,
    State: string,
    Status: string,
    HostConfig: {
        NetworkMode: string,
    },
    NetworkSettings: {
        Networks: any
    },
    Mounts: any[],
}