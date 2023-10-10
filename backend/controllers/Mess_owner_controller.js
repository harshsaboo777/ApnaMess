import client from "../db.js";

export const View_mess_users = async (req, res) => {

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


  export const fetch_total_tokens = async (req, res) => {

    const {Mess_id} = req.body;
    let exists;
    try {
      exists = await client.query("select sum(daily_tokens) from subscription where Mess_id=$1",
      [Mess_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows);
  };

  export const Deduct_tokens = async (req, res) => {

    const {Mess_id} = req.body;
    let exists;
    try {
      exists = await client.query("UPDATE subscription SET remaining_token = remaining_token-daily_tokens WHERE mess_id=$1;",
      [Mess_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows);
  };