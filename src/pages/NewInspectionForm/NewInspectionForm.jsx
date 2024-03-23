import LivingRoomInspection from "../../components/LivingRoomInspection/LivingRoomInspection"
import KitchenInspection from "../../components/KitchenInspection/KitchenInspection"
import BathroomInspection from "../../components/BathroomInspection/BathroomInspection"
import OtherRoom from "../../components/OtherRoom/OtherRoom"
import SecondaryRoom from "../../components/SecondaryRoom/SecondaryRoom"
import Exterior from "../../components/Exterior/Exterior"
import HeatingAndPlumbing from "../../components/HeatingAndPlumbing/HeatingAndPlumbing"
import GeneralHealth from "../../components/GeneralHealth/GeneralHealth"
export default function NewInspectionForm() {
    return (
        <>
            <div> THIS IS NEW INSPECTION FORM</div>

            <div>COMPONENTS:</div>

            <div>
                <LivingRoomInspection>
                </LivingRoomInspection>
            </div>
            <div>
                <KitchenInspection>

                </KitchenInspection>

            </div>
            <div>
                <BathroomInspection>

                </BathroomInspection>
            </div>
            <div>
                <OtherRoom>

                </OtherRoom>
            </div>
            <div>
                <SecondaryRoom>
                </SecondaryRoom>
            </div>
            <div>
                <Exterior>
                </Exterior>
            </div>
            <div>
                <HeatingAndPlumbing>
                </HeatingAndPlumbing>
            </div>
            <div>
                <GeneralHealth>
                    
                </GeneralHealth>
            </div>

        </>
    )
}