export const PortalReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DOCTOR":
            console.log(action);
            const added = {
                name: action.name,
                id: action.name + state.doctors.length
            }
            const newDoctor = [...state.doctors, added]
            return {
                ...state,
                doctors: newDoctor
            }

        case "REMOVE_DOCTOR":
            const removed = state.doctors.filter(doctor => doctor.id !== action.id);
            return {
                ...state,
                doctors: removed
            }

        default:
            return state;

    }
}