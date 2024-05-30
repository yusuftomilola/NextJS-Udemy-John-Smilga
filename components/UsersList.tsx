import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

const UsersList = async () => {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className="capitalize text-lg flex justify-between items-center mb-2"
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <p>No User Found.....</p>
      )}
    </div>
  );
};

export default UsersList;
