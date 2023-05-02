import ContainerAndLogo from './ContainerAndLogo';
import FadeLoader from "react-spinners/FadeLoader";

export default function LoadingComponent() {

    return (

        <div class="flex justify-center w-full">
            <FadeLoader color="var(--darker-secondary-color)" loading={true} size={150} />
        </div>

    );
}