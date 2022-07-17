import React, { Fragment, ChangeEvent } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ReduxState } from "../../store";
import { formFetchCategory } from "../../store/category/categoryActions";
import { formFetchPlaces, formFetchPlacesNearby } from "../../store/places/placesActions";
import { UpdateLocation } from "../../store/user/userActions";


// These props will be injected into the wrapped component
interface ConnectedProps {
    handleFetchCategory: () => void;
    handleFetchPlaces:() => void;
    handleUpdateLocation:(payload: any) => void;
    handleFetchPlacesNearby:(latitude: any, longitude: any) => void;

}

export const DefaultHoc = <BaseProps extends ConnectedProps>(
    BaseComponent: React.ComponentType<BaseProps>
) => {
    const mapStateToProps = (state: ReduxState) => ({
        category: state.category,
        places: state.places,
        user: state.user,

    });

    const mapDispatchToProps = (
        dispatch: ThunkDispatch<{}, {}, any>
    ): ConnectedProps => {
        return {
            handleFetchCategory: () =>
                dispatch(formFetchCategory()),
            handleFetchPlaces: () =>
                dispatch(formFetchPlaces()),
            handleUpdateLocation: (payload: any) =>
                dispatch(UpdateLocation(payload)),
            handleFetchPlacesNearby: (latitude: any, longitude: any) =>
                dispatch(formFetchPlacesNearby(latitude, longitude)),
        };
    };

    type HocProps = ReturnType<typeof mapStateToProps> &
        ReturnType<typeof mapDispatchToProps> & {
            // extend ConnectedHoc with new loading state props
            // no need to access to logger.isloading to trigger page loading
            loading?: boolean;
            // state active item need to be injected because the modal dialog component need it
            activeItem?: any;
        };

    class Hoc extends React.Component<HocProps> {
        // Enhance component name for debugging and React-Dev-Tools
        static displayName = `WithConnectedHOC(${BaseComponent.name})`;
        // reference to original wrapped component
        static readonly WrappedComponent = BaseComponent;

        state = {
            location: {
                latitude: "",
                longitude: "",
                city: "",
                state: "",
                country: ""
            },
            formAction: {
                type: "",
                data: [],
            },
        };

        handleFetchResources = async () => {
            try {
                Promise.all([
                    this.props.handleFetchCategory(),
                    // this.props.handleFetchPlaces()
                ]).then(response => {
            
                }).catch(error => {
                    console.log(error)
                })
            } catch (error: any) {
                console.log("ERROR :", error)
            }
        }

        handleUpdateLocation = async (payload: any) => {
            try {
                Promise.all([
                    this.props.handleUpdateLocation(payload),
                    this.props.handleFetchPlacesNearby(payload.latitude, payload.longitude)
                ]).then(response => {

                }).catch(error => {
                    console.log(error)
                })
            } catch (error: any) {
                console.log("ERROR :", error)
            }
        }



        render() {
            const {
                category,
                places,
                user,
                ...restProps
            } = this.props;
            const { location, formAction } = this.state;

            return (
                <>
                    <BaseComponent
                        category={category} // injected
                        user={user}
                        places={places}
                        fetchResources={this.handleFetchResources}
                        fetchPlaces={this.props.handleFetchPlaces}
                        updateLocation={this.handleUpdateLocation}
                        {...(restProps as BaseProps)}
                    />

                </>
            );
        }
    }

    const ConnectedHoc = connect(mapStateToProps, mapDispatchToProps)(Hoc);

    return ConnectedHoc;
};
