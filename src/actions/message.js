export const MESSAGE_UPDATED = 'MESSAGE_UPDATED';

export function updateMessage(message) {
    return {
        type: MESSAGE_UPDATED,
        message: message
    }
}