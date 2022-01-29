namespace SMOS.Model;

public class User
{
    public User(int id, string name, bool isAdmin, DateTime dateOfCreation, string password)
    {
        Id = id;
        Name = name;
        IsAdmin = isAdmin;
        DateOfCreation = dateOfCreation;
        Password = password;
    }

    public int Id { get; }
    public string Name { get; }
    public bool IsAdmin { get; }
    public DateTime DateOfCreation { get; }
    public string Password { get; }
}