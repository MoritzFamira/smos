namespace SMOS.Model;

public class Voting
{
    public Voting(int designGuid, int artistId, int votes, DateTime dateOfCreation)
    {
        DesignGuid = designGuid;
        ArtistId = artistId;
        Votes = votes;
        DateOfCreation = dateOfCreation;
    }

    public int DesignGuid { get; }
    public int ArtistId { get; }
    public int Votes { get; }
    public DateTime DateOfCreation { get; }
}