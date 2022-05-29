namespace SMOS.Model;

public class Voting
{
    //TODO consider adding filetype as in Design
    public Voting(Guid designGuid, int artistId, int votes)//, DateTime dateOfCreation)
    {
        DesignGuid = designGuid;
        ArtistId = artistId;
        Votes = votes;
        //DateOfCreation = dateOfCreation;
    }

    public Guid DesignGuid { get; }
    public int ArtistId { get; }
    public int Votes { get; }
    //public DateTime DateOfCreation { get; }
}