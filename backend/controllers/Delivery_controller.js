import client from "../db.js";
// Boy_id,Mess_id

export const check_mess_unique = async (req, res) => {
    const {deliver_id,code} = req.body;
    
    let exists;
    try {
        await client.query("UPDATE mess set agent = $1 where mess_id in (select Mess_id from mess where code =$2)",[deliver_id,code]);
      } catch (err) {
        console.log(err);
      }
    res.status(200).send("You are now delivering to Mess");
  };

  export const fetch_mess_id = async (req, res) => {
    const {deliver_id} = req.body;

    let exists;
    try {
        exists = await client.query("select mess_id from mess where agent=$1",[deliver_id]);
      } catch (err) {
        console.log(err);
      }

    res.send(exists.rows[0]);
  };

  export const fetch_mess_users = async (req, res) => {
    const {Mess_id} = req.body;
    let exists;
    try {
      exists = await client.query("select Users.fname,Users.lname,Users.phone_num,Users.email,Users.user_address,Subscription.daily_tokens from subscription inner join Users on Users.User_id = Subscription.customer_id where subscription.Mess_id=$1",
      [Mess_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows);
  };
