
export const urisConstants = (id = 1) => {
    return {
        users: {
            path: 'users',
            stateType: 'users',
            singleRecord: false,
        },
        user: {
            path: `users/${id}`,
            stateType: 'user',
            singleRecord: true,
        }
    }
}