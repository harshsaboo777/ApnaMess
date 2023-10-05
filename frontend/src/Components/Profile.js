import Navbar from "./Navbar";
import styles from "../ComponentStyles/Profile.css";

function Profile() {
    return (
        <div >
            <Navbar/>
            <div className="bg-gray-100 dark:bg-gray-700 ">
                <div class="images">
                        <img src="../images/img.jpeg"/>
                </div>
                <div class="profile">
                    <button class="text-orange-500 hover:text-black">Edit Profile</button>
                </div>
                <div class="text">Deepti Sharma</div>
                <div class="text1">Mobile no.  Email</div>
                <div class="text2">
                    <button class="text-orange-500 hover:text-black">Past Orders</button>
                </div>
                <div class="text3">
                    <button class="text-orange-500 hover:text-black">View All</button>
                </div>
                <div class="card ">
                    <div class="box">
                        <img src="../images/img1.jpeg"/>
                            <p>Prachi Mess</p>
                            <p>New Palasia</p>
                    </div>
                    <div class="box">
                        <img src="../images/img1.jpeg"/>
                            <p>Upadhya Mess</p>
                            <p>Vallabh Nagar</p>
                    </div>
                    <div class="box">
                        <img src="../images/img1.jpeg"/>
                            <p>Sharma Mess</p>
                            <p>Rani Sati</p>
                    </div>
                    <div class="box">
                    <img src="../images/img1.jpeg"/>
                        <p>Meenu Mess</p>
                        <p>AB Road</p>
                    </div>
                    </div>
                <div class="text4">
                    <button class="text-orange-500 hover:text-black">Your Favourites</button>
                </div>
                <div class="text5">
                    <button class="text-orange-500 hover:text-black">View All</button>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="../images/img1.jpeg"/>
                            <p>Prachi Mess</p>
                            <p>New Palasia</p>
                    </div>
                    <div class="box">
                        <img src="../images/img1.jpeg"/>
                            <p>Upadhaya Mess</p>
                            <p>Vallabh Nagar</p>
                    </div>
                    <div class="box">
                        <img src="../images/img1.jpeg"/>
                            <p>Sharma Mess</p>
                            <p>Rani Sati</p>
                    </div>
                    <div class="box">
                    <img src="../images/img1.jpeg"/>
                        <p>Meenu Mess</p>
                        <p>AB Road</p>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Profile;
