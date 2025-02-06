<script lang="ts">
	import QrCode from "../qrcode/QRCode.svelte";

    export let card;
</script>

<div class="item">
    <div class="card-body1">
        <div class="float-end">
            <QrCode value={card.link} className="qrcode" width={100} />
        </div>

        <h5 class="card-title fw-bolder">{card.name}</h5>
        <h6 class="card-subtitle text-body-secondary mb-3">{card.pn}</h6>

        <p
            class="card-text text-body-secondary mb-1"
            style="font-size: .8rem; height:.6in; overflow: hidden; text-overflow: ellipsis;white-space: wrap;"
        >
            {card.desc}
        </p>

        <div class="row" style="margin-left: 0rem; margin-right: 0rem;">
            <div class="p-1 col-6 text-center">
                <div class="rounded bg-danger-subtle">
                    Min QTY
                    <div class="fw-bold text-danger fs-3">{card.minQty}</div>
                </div>
            </div>
            <div class="p-1 col-6 text-center">
                <div class="rounded bg-primary-subtle">
                    Reorder QTY
                    <div class="fw-bold text-primary fs-3">{card.reorderQty}</div>
                </div>
            </div>
            <div class="p-1 col-12">
                <div class="p-2 rounded bg-secondary-subtle">
                    <div class="fw-bold">Location</div>
                    <div>{card.location}</div>
                </div>
            </div>
            <div class="p-1 col-12">
                <div class="p-2 rounded bg-warning-subtle">
                    <div class="fw-bold">Department</div>
                    <div>{card.department}</div>
                </div>
            </div>
            <div class="p-1 col-12 text-center">
                <div class="border rounded">
                    <img src={card.img} class="img-fluid" style="height: 2in; padding: 5px" alt="" />
                </div>
            </div>
            <div class="ps-3 row text-small text-center" style="font-size: .8rem; color: #a0a0a0">
                Revision: {card.rev} &mdash; {card.revDate}
            </div>
        </div>
    </div>
    <!-- <h1>{card.name}</h1>
    <img src={card.img} alt={card.name} />
    <p>{card.desc}</p>
    <p>Part Number: {card.pn}</p>
    <p>Minimum Quantity: {card.minQty}</p>
    <p>Reorder Quantity: {card.reorderQty}</p>
    <p>Location: {card.location}</p>
    <p>Department: {card.department}</p>
    <p>Revision: {card.rev}</p>
    <p>Revision Date: {card.revDate}</p>
    <a href={card.link}>Link</a> -->
</div>

<style lang="scss">
    .item {
        padding: 10px;
        width: 4in;  // Label Width
		height: 6in; // Label Height
    }
</style>