
export const urisConstants = (id = 1) => {
    return {
        users: {
            path: 'users',
            dataType: 'users',
            isArray: true,
        },
        user: {
            path: `users/${id}`,
            dataType: 'user',
            isArray: false,
        }
    }
}