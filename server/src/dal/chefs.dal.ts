import Chefs from "../db/models/chefs";

export class ChefsDal {
  public async createChef(chef: any) {
    console.log(chef)
    try {
      const exist = await Chefs.find({ name: chef.name })
      if (!((exist).length > 0))
      {
        chef = new Chefs({
          name: chef.name,
          age: chef.age,
          description: chef.description,
          restaurants: [],
          img: "IMG"
        });
      chef.save(function (err: any, results: any) {
        if (err) {
          throw err;
        }
        return results;
      });
      }

    }
    catch (e) {
      console.log(e)
    }
  }

  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({ $set: { age: chef.age } });
    return data;
  }

  public findAll(query: any = null) {
    return Chefs.find(query);
  }

  public async getChef(param: { [key: string]: string }) {
    const data = await Chefs.aggregate([
      { $match: { name: `${param.name}` } },
      {
        $lookup: {
          localField: "restaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }

  public async getChefOfTheWeek() {
    const data = await Chefs.find();

    return data[0];
  }
}
