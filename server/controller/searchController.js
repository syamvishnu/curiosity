const apiSearch = async (req, res, next) => {
  console.log(req.body);
  const data = req.body.data;
  const token = process.env.IPINFO_TOKEN;

  try {
    const response = await fetch(
      "https://ipinfo.io/85.203.15.85/json?token=52ca2ae1255c41"
    );

    const ipInfo = await response.json();
    console.log(ipInfo);

    return res.json(ipInfo);
  } catch (error) {
    next(error);
  }
};

export { apiSearch };
