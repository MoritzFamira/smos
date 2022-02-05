namespace SMOS.Model;

public class User
{
    public User(int id, string name, bool isAdmin, DateTime dateOfCreation)
    {
        Id = id;
        Name = name;
        IsAdmin = isAdmin;
        DateOfCreation = dateOfCreation;
    }

    public int Id { get; }
    public string Name { get; }
    public bool IsAdmin { get; }
    public DateTime DateOfCreation { get; }
}