import ContainerAndLogo from './ContainerAndLogo';
import FadeLoader from "react-spinners/FadeLoader";

export default function LoadingComponent() {

    return (

        <div class="flex items-center justify-center w-screen h-screen">
            <FadeLoader color="var(--darker-secondary-color)" loading={true} size={150} />
        </div>

    );
}