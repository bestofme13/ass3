import { NFTTransfer as NFTTransferEvent, NftMarket} from "../generated/NftMarket/NftMarket";
import { NFT } from "../generated/schema";

export function handleNFTTransfer(event: NFTTransferEvent): void {
  let entity = new NFT(event.params.tokenID.toString());
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenURI = event.params.tokenURI;
  entity.price = event.params.price;
  const nftMarket = NftMarket.bind(event.address)
  const tokenURI = nftMarket.tokenURI(event.params.tokenID);
  entity.tokenURI = tokenURI;
  entity.save();
}
